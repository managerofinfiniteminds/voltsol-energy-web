import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
const l=readFileSync('.env.local','utf8').split('\n').find(x=>x.match(/^(NEON_DATABASE_URL|DATABASE_URL)=/));
const sql=neon(l.split('=').slice(1).join('=').replace(/["']/g,'').trim());
const cmd=process.argv[2];
if(cmd==='get'){const r=await sql`SELECT token FROM admin_login_tokens WHERE email='hugo@voltsolenergy.com' AND used_at IS NULL ORDER BY created_at DESC LIMIT 1`;console.log(r[0]?.token||'NONE');}
if(cmd==='state'){const r=await sql`SELECT token, used_at FROM admin_login_tokens WHERE token=${process.argv[3]}`;console.log(JSON.stringify(r[0]||{}));}
if(cmd==='count'){const r=await sql`SELECT count(*)::int n FROM admin_login_tokens WHERE email='hugo@voltsolenergy.com' AND used_at IS NULL`;console.log('unused tokens for hugo:',r[0].n);}
