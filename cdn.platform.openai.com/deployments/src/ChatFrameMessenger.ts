import { BaseMessenger } from "chatkit-web-shared/BaseMessenger"
import { InnerCommands, InnerEvents, OuterCommands, OuterEvents } from "chatkit-web-shared/types"

export class ChatFrameMessenger extends BaseMessenger<
  OuterCommands,
  InnerCommands,
  OuterEvents,
  InnerEvents
> {
  // Messenger running in outer can always handle commands coming from inner
  canReceiveCommand(_: string) {
    return true
  }
}
