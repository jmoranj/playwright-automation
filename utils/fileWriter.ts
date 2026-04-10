import fs from "fs"
import path from "path"

export const saveJSON = (data: any, filePath: string) => {

  fs.mkdirSync(path.dirname(filePath), { recursive: true })

  fs.writeFileSync(
    filePath,
    JSON.stringify(data, null, 2)
  )
}