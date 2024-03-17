import { Context } from "telegraf";

export interface SessionData {
 choiceButton: boolean;
}

export interface IBotContext extends Context {
    session: SessionData;
}