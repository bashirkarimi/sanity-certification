import Link from "next/link";

export function Event(props: any) {
  console.log("Event props:", Array.isArray(props) ? props : [], props);

  const events = Array.isArray(props)
    ? props
    : props && typeof props === "object"
    ? [props]
    : [];

  console.log("Event props (normalized):", events);
  return (
    <div className="flex  flex-col p-2 gap-1">
      <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {events.map((event: any) => (
          <li
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm dark:shadow-gray-900/20"
            key={event._key}
          >
            <Link
              className="hover:underline block"
              href={`/events/${event?.slug?.current}`}
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {event?.name}
              </h2>
              {event?.date && (
                <p className="text-gray-500 dark:text-gray-400">
                  {new Date(event.date).toLocaleDateString()}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
