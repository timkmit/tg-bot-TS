import { Markup, Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";

export class StartCommand extends Command {
    
    constructor(bot: Telegraf<IBotContext>){
        super(bot);
    }

    handle(): void {
        this.bot.start((ctx) => {
            console.log(ctx.session);
            ctx.reply("Two inlineKeyboard buttons", Markup.inlineKeyboard([
                Markup.button.callback("1", "one"),
                Markup.button.callback("2", "two"),
            ]))
        })

        this.bot.action("one", (ctx) => {
            ctx.session.choiceButton = true;
            ctx.editMessageText("1 button message true")

        });
        this.bot.action("two", (ctx) => {
            ctx.session.choiceButton = false;
            ctx.editMessageText("2 button message false")

        });
    }
}