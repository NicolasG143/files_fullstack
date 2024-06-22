interface Line {
  text: string;
  number: number;
  hex: string;
}

const getLines = (file: string[]) => {
  return file
    .map((line: string) => {
      const [text, number, hex] = line.split(",").slice(1);

      return {text, number: parseInt(number), hex};
    })
    .filter((line: Line) => line.text && line.number && line.hex);
};

export async function GET(request: Request, {params}: {params: {file: string}}) {
  const {file} = params;
  const res = await fetch(`https://echo-serv.tbxnet.com/v1/secret/file/${file}`, {
    headers: {Authorization: "Bearer aSuperSecretKey"},
  });
  const csv = await res.text().then((res) => res.split("\n").slice(1));
  const lines = getLines(csv);

  return Response.json({file, lines});
}
