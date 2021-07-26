export async function fetchViews(namespace: string, key: string) {
    const url = "https://api.countapi.xyz/hit/" + namespace + "/" + key
    const data = await fetch(url)
    return data.json()
}
