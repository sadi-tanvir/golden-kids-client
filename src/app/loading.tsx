const Loading = () => {
  return (
    <div className="loader inline-block">
      <div className="w-48 h-48 border-4 border-white border-solid rounded-full relative animate-rotate">
        <div className="absolute inset-0 border-4 border-white border-solid rounded-full animate-prixClipFix"></div>
        <div className="absolute inset-6 border-4 border-orange-500 border-solid rounded-full animate-prixClipFix animate-rotate-reverse"></div>
      </div>
    </div>
  );
};

export default Loading;
