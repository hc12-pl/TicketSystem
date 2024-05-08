import paseto from 'paseto';

const { V4: { sign, generateKey, verify }} = paseto

const {secretKey, publicKey} = await generateKey('public', { format: 'paserk' });

console.log(`Secret key: ${secretKey}\nPublic key: ${publicKey}`)

const token = await sign(
    {sub: "kapusta"},
    secretKey,
    {expiresIn: "1h"}
)

console.log(token)

const ver = await verify(token, publicKey)

console.log(ver)

