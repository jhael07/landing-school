const BasicList = ({ items }: { items: string[] }) => {
  return (
    <div className="my-10 grid sm:grid-cols-2 w-full gap-4 ">
      {items.map((item, i) => (
        <div key={item} className="p-3 px-4 w-full border rounded-lg items-center flex gap-x-4">
          <h2 className="text-lg font-bold flex-shrink-0  w-10 h-10 items-center justify-center text-center bg-primary-600 flex rounded-full text-primary-950">
            {i + 1}
          </h2>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default BasicList;
