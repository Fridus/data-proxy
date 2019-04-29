import { IAuthBackend } from "./auth/base";
import { Backend } from "./backend/interface";

export interface IBeforeData {
  path?: string;
  ref?: string;
  serverOptions: IServerOptions;
}

export interface IServerOptions {
  projectId: string;
  auth: IAuthBackend;
  backend: Backend;
  before: (data: IBeforeData) => Promise<void>;
  prefix?: string;
}

export interface ICommitAction {
  action: "create" | "delete" | "move" | "update";
  file_path: string;
  content?: string;
  encoding?: string;
}

export interface ICommitBody {
  actions: ICommitAction[];
  branch: string;
  commit_message: string;
}
