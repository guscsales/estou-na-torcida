export type Dictionary = Record<string, string>;

export function translate(
  dictionary: Dictionary,
  key: string,
  values: Record<string, string | number> = {}
) {
  const message = dictionary[key] ?? key;

  return Object.entries(values).reduce(
    (current, [name, value]) =>
      current.replaceAll(`{${name}}`, String(value)),
    message
  );
}

export function translateLines(
  dictionary: Dictionary,
  key: string,
  values?: Record<string, string | number>
) {
  return translate(dictionary, key, values).split('\n');
}
