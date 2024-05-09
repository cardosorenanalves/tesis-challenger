export const telefonemask = (value: string) => {
    if (value == null) {return;}
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g,'($1) $2');
    value = value.replace(/(\d)(\d{4})$/,'$1-$2');
    return value;
  };