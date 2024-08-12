export interface ChatHistoryResponseInterface{
  id: string,
  list: Array<ChatResponseDto>,
  date: Date
}
export interface ChatResponseInterface{
  chatId: string,
  response : ChatResponseDto;
}
export interface ChatResponseDto{
  message: string,
  content: string,
  isSafe: boolean,
  sender: Sender
}


export enum Sender {
    User = 'user',
    Bot = 'bot'
  }