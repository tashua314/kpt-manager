import Database from '@better-sqlite3/better-sqlite3';

const db = new Database('kpt.db');

// テーブル作成
db.exec(`
  CREATE TABLE IF NOT EXISTS kpt_entries (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    content TEXT NOT NULL,
    userId TEXT NOT NULL,
    userName TEXT NOT NULL,
    category TEXT,
    tags TEXT,
    createdAt TEXT NOT NULL,
    likes INTEGER DEFAULT 0,
    isPublic BOOLEAN DEFAULT true
  )
`);

export { db };