import { Markup, Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";
import { take_all_goods } from "../button functions/take_all_goods.function";

export class StartCommand extends Command {
    
    constructor(bot: Telegraf<IBotContext>){
        super(bot);
    }

    handle(): void {
        this.bot.start((ctx) => {
            console.log(ctx.session);
            ctx.reply("Выберите необходимое действие", Markup.inlineKeyboard(
                [
                    [
                        Markup.button.callback("📝 Список товаров", "take_all_goods"),
                        Markup.button.callback("📈 Выписка дохода", "take_extract"),
                        
                    ],
                    [
                        Markup.button.callback("✅ Добавить заказ", "add_order"),
                        Markup.button.callback("❌ Оформить возврат", "add_refund")
                    ],
                    [
                        
                        Markup.button.callback("📜 Выбрать товар", "take_good"),
                        Markup.button.callback("📔 Выбрать категорию", "take_category_goods"),
                        
                    ],
                    [
                        Markup.button.callback("💬 Поиск товара", "find_good"),
                        
                    ],
                ]

            ))
        })

        //this.bot.action("one", (ctx) => {
        //    ctx.session.choiceButton = true;
        //    ctx.editMessageText("1 button message true")

        //});

        this.bot.action("go_back", (ctx) => {
            console.log("Пользователь вернулся назад");
            ctx.reply("Выберите необходимое действие", Markup.inlineKeyboard(
                [
                    [
                        Markup.button.callback("📝 Список товаров", "take_all_goods"),
                        Markup.button.callback("📈 Выписка дохода", "take_extract"),
                    ],
                    [
                        Markup.button.callback("✅ Добавить заказ", "add_order"),
                        Markup.button.callback("❌ Оформить возврат", "add_refund")
                    ],
                    [
                        Markup.button.callback("📜 Выбрать товар", "take_good"),
                        Markup.button.callback("📔 Выбрать категорию", "take_category_goods"),
                    ],
                    [
                        Markup.button.callback("💬 Поиск товара", "find_good"),
                    ],
                ]
            ));
        });

        this.bot.action("take_all_goods", (ctx) => {
            console.log("Получить список товаров")
            take_all_goods(ctx);
        });

        this.bot.action("take_extract", (ctx) => {
            console.log("Выписка дохода")
            ctx.reply("Выписка дохода")
        })

        this.bot.action("add_order", (ctx) => {
            console.log("Добавить заказ")
            ctx.reply("Добавить заказ")
        })

        this.bot.action("add_refund", (ctx) => {
            console.log("Оформить возврат")
            ctx.reply("Оформить возврат")
        })

        this.bot.action("take_good", (ctx) => {
            console.log("Выбрать товар")
            ctx.reply("Выбрать товар")
        })

        this.bot.action("take_category_goods", (ctx) => {
            console.log("Выбрать категорию")
            ctx.reply("Выбрать категорию")
        })

        this.bot.action("find_good", (ctx) => {
            console.log("Поиск товара")
            ctx.reply("Поиск товара")
        })
    }
}