enum LogLevel {
  DEBUG,
  LOG,
  INFO,
  WARN,
  ERROR,
}

interface LogOptions {
  logLevel?: LogLevel;
  logId?: string;
  showArgs?: boolean;
  showResult?: boolean;
}

/**
 * Log the arguments and return value for a method
 * @return {TypedPropertyDescriptor}
 */
export default function log(options: LogOptions) {
  const { logLevel = LogLevel.LOG, logId = '', showArgs = true, showResult = true } = options;
  let _log_leveled;
  switch (logLevel) {
    case LogLevel.DEBUG: _log_leveled = console.debug; break;
    case LogLevel.LOG: _log_leveled = console.log; break;
    case LogLevel.INFO: _log_leveled = console.info; break;
    case LogLevel.WARN: _log_leveled = console.warn; break;
    case LogLevel.ERROR: _log_leveled = console.error; break;
  }

  const _log = function (s: string) {
    _log_leveled.call(console, `[${logId}] ${s}`);
  };

  return function (target: Object, name: string, descriptor: TypedPropertyDescriptor<any>) {
    const value = descriptor.value;
    descriptor.value = function (...args: any[]): any {
      if (showArgs) { _log(`args: ${JSON.stringify(args)}`); }
      const result: any = value.apply(this, args);
      if (showResult) { _log(`result: ${JSON.stringify(result)}`); }
      return result;
    };
    return descriptor;
  };
}
