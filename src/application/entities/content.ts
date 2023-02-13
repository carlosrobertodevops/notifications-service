export class Content {
  toThrow() {
    throw new Error('Method not implemented.');
  }
  private readonly content: string;

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Content length erro !');
    }
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  get value(): string {
    return this.content;
  }
}
