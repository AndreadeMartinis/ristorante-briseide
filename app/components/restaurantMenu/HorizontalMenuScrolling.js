export default function HorizontalMenuScroll({
  menuData,
  RowComponent,
  language,
}) {
  return (
    <div className="overflow-x-auto whitespace-nowrap cursor-grab active:cursor-grabbing px-4 pt-24 pb-6">
      <div className="flex gap-6">
        {menuData.map(({ name, translation, items }) => (
          <div
            key={name}
            className="shrink-0 w-[90vw] max-w-md border-4 border-white outline outline-primary bg-secondary p-4"
          >
            <h2 className="text-2xl md:text-3xl font-semibold tracking-wider uppercase mb-4">
              {translation}
            </h2>

            <div className="flex flex-col gap-4">
              {Object.entries(items).map(([itemName, details]) => (
                <RowComponent
                  key={itemName}
                  name={itemName}
                  details={details}
                  language={language}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
