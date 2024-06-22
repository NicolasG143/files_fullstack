interface Files {
  files: string[];
}

export async function GET() {
  const res = await fetch("https://echo-serv.tbxnet.com/v1/secret/files", {
    headers: {Authorization: "Bearer aSuperSecretKey"},
  });
  const files = (await res.json()) as Promise<Files>;

  return Response.json(files);
}
