import { Context } from "telegraf";

export interface SessionData {
 choiceLike: boolean;
}

export interface IBotContext extends Context {
    session: SessionData;
}