String.prototype.toId = function (): string {
  return this.toLowerCase().replace(/\s/g, "-").toLowerCase();
};
