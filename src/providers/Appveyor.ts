import { Embed } from "../model/Embed"
import { BaseProvider } from "../util/BaseProvider"

/**
 * https://www.appveyor.com/docs/notifications/#webhook-payload-default
 */
class AppVeyor extends BaseProvider {

    public static getName() {
        return 'AppVeyor'
    }

    public async parseData() {
        this.payload.setEmbedColor(0xFFFFFF)
        const embed = new Embed()
        embed.description = "**Status**: " + this.body.eventData.status
        embed.title = "Build #" + this.body.eventData.buildNumber
        embed.url = this.body.eventData.buildUrl
        this.payload.addEmbed(embed)
    }
}

export { AppVeyor }