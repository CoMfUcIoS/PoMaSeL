import build from "./app";

const app = build({ logger: true });

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", err => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});

const add = (a: number, b: number): number => a + b;

export default add;
