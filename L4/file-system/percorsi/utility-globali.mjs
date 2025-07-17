//Con i moduli ECMAscript non hai __dirname, e __filename (Notare che l'estensione di questo file è .mjs )

import { fileURLToPath } from "url";
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('__dirname',__dirname);//E:\corsi\node-serale\L4\file-system\percorsi
console.log('__filename',__filename);//E:\corsi\node-serale\L4\file-system\percorsi\utility-globali.js