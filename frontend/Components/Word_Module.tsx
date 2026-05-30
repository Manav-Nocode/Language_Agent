interface wordProps {
  name: string;
  meaning: string;
}
const Word_Module = ({ name, meaning }: wordProps) => {
  return (
    <div className="p-10">
      <div className="w-full h-30 rounded-sm bg-orange-300 flex items-center justify-between p-10 mb-1">
        <span>{name}</span>
        <span>{meaning}</span>
      </div>
      {/* <div className="bg-blue-300 w-full h-60">Random examples</div> */}
    </div>
  );
};

export default Word_Module;
