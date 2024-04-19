import "./styles.css";

type Props = {
  name: string;
};

export default function ProductCategory({ name }: Props) {
  return (
    <>
      <div className="pr-productcategory-container">
        <h1>{name}</h1>
      </div>
    </>
  );
}
