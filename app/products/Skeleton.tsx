function Skeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center my-15 gap-8 ml-8">
      <div className="flex w-100 flex-col gap-4">
        <div className="skeleton h-32 w-full "></div>
        <div className="skeleton h-6 w-28"></div>
        <div className="skeleton h-6 w-full"></div>
        <div className="skeleton h-6 w-full"></div>
      </div>
      <div className="flex w-100 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-6 w-28"></div>
        <div className="skeleton h-6 w-full"></div>
        <div className="skeleton h-6 w-full"></div>
      </div>
      <div className="flex w-100 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-6 w-28"></div>
        <div className="skeleton h-6 w-full"></div>
        <div className="skeleton h-6 w-full"></div>
      </div>
      <div className="flex w-100 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-6 w-28"></div>
        <div className="skeleton h-6 w-full"></div>
        <div className="skeleton h-6 w-full"></div>
      </div>
    </div>
  );
}

export default Skeleton;
