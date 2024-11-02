import { writable } from 'svelte/store';
import type { KPTEntry } from '../types/kpt';
import { db } from '../db';
import { addNotification } from './notification';

export const timelineEntries = writable<KPTEntry[]>([]);

// データの初期読み込み
function loadEntries() {
  try {
    const entries = db.prepare('SELECT * FROM kpt_entries ORDER BY createdAt DESC').all();
    const parsedEntries = entries.map(entry => ({
      ...entry,
      tags: JSON.parse(entry.tags || '[]'),
      comments: [] // コメント機能は後で実装
    }));
    timelineEntries.set(parsedEntries);
  } catch (error) {
    console.error('Failed to load entries:', error);
    addNotification('エントリーの読み込みに失敗しました', 'error');
  }
}

export function addEntry(entry: Omit<KPTEntry, 'id' | 'likes' | 'comments'>) {
  try {
    const id = Math.random().toString(36).slice(2);
    const stmt = db.prepare(`
      INSERT INTO kpt_entries (id, type, content, userId, userName, category, tags, createdAt, isPublic)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    
    stmt.run(
      id,
      entry.type,
      entry.content,
      entry.userId,
      entry.userName,
      entry.category,
      JSON.stringify(entry.tags),
      entry.createdAt,
      true
    );

    loadEntries(); // 再読み込み
    addNotification(`${entry.type.toUpperCase()}を登録しました`);
  } catch (error) {
    console.error('Failed to add entry:', error);
    addNotification('エントリーの登録に失敗しました', 'error');
  }
}

// 初期データ読み込み
loadEntries();