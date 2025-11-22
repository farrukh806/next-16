const EventTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-row gap-2 mt-4 flex-wrap">
      {tags.map((tag, index) => (
        <span key={index} className="pill">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default EventTags;
