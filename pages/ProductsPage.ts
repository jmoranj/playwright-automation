import { Page } from "@playwright/test";

export class ProductsPage {

  constructor(private page: Page) {}
  
  async extractInventoryData() {

    const items = this.page.locator(".inventory_item")

    const data: { name: string; price: string }[] = []

    const count = await items.count()

    for (let i = 0; i < count; i++) {

      const item = items.nth(i)

      const name = await item.locator(".inventory_item_name").innerText()
      const price = await item.locator(".inventory_item_price").innerText()

      data.push({
        name,
        price
      })
    }

    return data
  }
}
