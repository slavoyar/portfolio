type SectorBackdropProps = {
  pattern: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

/** Decorative geometry field — pattern picks a distinct layout per chapter. */
export function SectorBackdrop({ pattern }: SectorBackdropProps) {
  return (
    <div className={['sector-stage__field', `sector-stage__field--p${pattern}`].join(' ')} aria-hidden='true'>
      <i />
      <i />
      <i />
      <b />
      <b />
      <em />
      <span />
      <span />
    </div>
  );
}
