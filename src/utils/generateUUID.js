const generateUUID = () => {
  let uuid = Date.now().toString(25) + Math.random().toString(20);
  uuid += "-";
  uuid += Date.now().toString(36) + Math.random().toString(36);
  return uuid.toUpperCase().replaceAll(".", "-");
};

export { generateUUID };
