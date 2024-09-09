import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VikaModuleBase } from "./base/vika.module.base";
import { VikaService } from "./vika.service";
import { VikaResolver } from "./vika.resolver";

@Module({
  imports: [VikaModuleBase, forwardRef(() => AuthModule)],
  providers: [VikaService, VikaResolver],
  exports: [VikaService],
})
export class VikaModule {}
