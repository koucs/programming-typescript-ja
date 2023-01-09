interface Emitter {
    emit(channel: string, value: unknown): void
    on(channel: string, f:(value: unknown) => void): void
}
