import { Test, TestingModule } from '@nestjs/testing';
import { NpanewsController } from './npanews.controller';

describe('NpanewsController', () => {
  let controller: NpanewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NpanewsController],
    }).compile();

    controller = module.get<NpanewsController>(NpanewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
