import { Controller } from '@nestjs/common';
import { KozaksService } from '../services/kozaks.service';

@Controller('kozaks')
export class KozaksController {
  constructor(private readonly kozaksService: KozaksService) {}
}
