export const CONNECTION = {
  show: connection => {
    if (
      !connection ||
      (connection.type !== 'wifi' && connection.type !== 'cellular')
    ) {
      return null;
    }
    return true;
  },
};
