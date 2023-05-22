export class Answer {
  public question: string;
  public answerFormat: string;
  public answer?: string;
  public answerOptions: { answer: string, checked: boolean }[];
  public allowOwnAnswer?: boolean;
  public otherAnswer?: string;
  public answerRequrie?: boolean;

  constructor(data?: Answer) {
    const answer = data == null ? this : data;
    this.question = answer.question;
    this.answerFormat = answer.answerFormat;
    this.answer = answer.answer;
    this.answerOptions = answer.answerOptions;
    this.allowOwnAnswer = answer.allowOwnAnswer;
    this.otherAnswer = answer.otherAnswer;
    this.answerRequrie = answer.answerRequrie;
  }
}
