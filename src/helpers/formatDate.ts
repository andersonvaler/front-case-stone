import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

export function formatDate(date: string) {
    const dateToFormat = new Date(date);
    const formatMode = `dd/MM/yyyy - HH:mm`;

    return (
        format(new Date(dateToFormat.valueOf() + dateToFormat.getTimezoneOffset() * 60 * 1000), formatMode, {
            locale: ptBR,
        }) + 'h'
    );
}
