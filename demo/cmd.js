const { execSync } = require('child_process');
const fn = (type) => {
    execSync(`cat test.js | openssl dgst -sha${type} -binary | openssl base64 -A > ./integrity/sha${type}.txt`);
}
fn(256);
fn(384);
fn(512);
