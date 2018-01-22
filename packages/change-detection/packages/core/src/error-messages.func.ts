
export function ErrorMessages(name: string): any {
  const messages = {
    undefined: `${name} is not defined`
  };
  if (name) {
    return messages;
  }
}
