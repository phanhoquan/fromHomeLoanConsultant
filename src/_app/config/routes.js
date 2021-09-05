import { CreateTemplateDialog } from "../pages/filesRequest/CreateTemplateDialog"
import { FilesRequest } from "../pages/filesRequest/FilesRequest"
import { links } from "./links"

export const routes = [
  {
    path: links.filesRequest.index(),
    component: FilesRequest,
    extract: true,
  },
  {
    path: links.filesRequest.createTemplate(),
    component: CreateTemplateDialog,
    extract: true,
  },
]
