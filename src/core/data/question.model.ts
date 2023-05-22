import { Answer } from "./answer.model";

export class Question {
    public question: string;
    public answerFormat: string;
    public answer?: string;
    public answerOptions: string[];
    public allowOwnAnswer: boolean;
    public otherAnswer?: string;
    public answerRequire: boolean;

    constructor(data?: Question) {
      const quest = data == null ? this : data;
      this.question = quest.question;
      this.answerFormat = quest.answerFormat;
      this.answer = quest.answer;
      this.answerOptions = quest.answerOptions;
      this.allowOwnAnswer = quest.allowOwnAnswer;
      this.otherAnswer = quest.otherAnswer;
      this.answerRequire = quest.answerRequire;
    }


  }
