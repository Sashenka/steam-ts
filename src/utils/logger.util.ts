import {LoggerFactoryOptions, LogGroupRule, LogLevel, LoggerFactory, LFService} from "typescript-logging";

const options = new LoggerFactoryOptions();
options.addLogGroupRule(new LogGroupRule(new RegExp("service.+"), LogLevel.Info));

export const logger: LoggerFactory = LFService.createNamedLoggerFactory("steam-ts", options);