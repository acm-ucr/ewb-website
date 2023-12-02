const CustomHeader = (prop) => {
  console.log(prop);
  return (
    <div className="bg-ewb-blue-200 text-white w-full p-0 m-0">
      {prop.label}
    </div>
  );
};

export default CustomHeader;
