import { expect, test } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { ProductsPage } from "../pages/ProductsPage"
import { saveJSON } from "../utils/fileWriter"

const missingEnv =
  !process.env.BASE_URL ||
  !process.env.USER_NAME ||
  !process.env.USER_PASSWORD

test.skip(
  missingEnv,
  "Set BASE_URL, USER_NAME, and USER_PASSWORD (copy .env.example to .env)"
)

test("Extract data and generate JSON", async ({ page }) => {
  const login = new LoginPage(page)
  const products = new ProductsPage(page)

  await login.navigate("/")

  await login.login(
    process.env.USER_NAME!,
    process.env.USER_PASSWORD!
  )

  await expect(page).toHaveURL(/\/inventory\.html$/)
  await expect(page.locator(".inventory_list")).toBeVisible()

  const data = await products.extractInventoryData()

  expect(
    data.length,
    "Sem produtos: login pode ter falhado ou a página mudou"
  ).toBeGreaterThan(0)

  saveJSON(data, "output/data.json")
})