import { Markup } from "telegraf";
import { IBotContext } from "../context/context.interface";

 export const take_all_goods = async ( ctx: IBotContext) => {
    console.log("команда Получить список товаров")
    ctx.editMessageText("Список товаров", Markup.inlineKeyboard([
        Markup.button.callback("Вернуться назад", "go_back")
    ]));
}