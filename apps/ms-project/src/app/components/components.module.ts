import { Module } from '@nestjs/common';
import { BuildingTypesModule } from './buildingType/buildingTypes.module';
import { CompanyModule } from './companies/company.module';
import { ProjectsModule } from './projects/projects.module';
import { ProjectWorkTypesModule } from './ProjectWorkType/projectWorkTypes.module';
import { ReferenceModule } from './reference/reference.module';
import { WorkTypesModule } from './workTypes/workTypes.module';

@Module({
  imports: [
    ReferenceModule,
    ProjectsModule,
    WorkTypesModule,
    ProjectWorkTypesModule,
    BuildingTypesModule,
    CompanyModule,
  ],
  providers: []
})
export class ComponentsModule { }
