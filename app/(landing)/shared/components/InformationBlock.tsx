const InformationBlock = ({ paragraphs }: { paragraphs: string }) => {
  return (
    <div className="flex flex-col gap-2 text-justify w-full">
      {paragraphs.split(/\r?\n/).map((pargraph, i) => (
        <p key={i} className="leading-7" dangerouslySetInnerHTML={{ __html: pargraph }} />
      ))}
    </div>
  );
};

export default InformationBlock;
