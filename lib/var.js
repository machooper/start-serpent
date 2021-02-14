import config form '../config.js'

export function vars() {
    const doc = document.documentElement;
    doc.style.setProperty('--primary', `${config.colors.primary}`)
    doc.style.setProperty('--secondary', `${config.colors.secondary}`)
    doc.style.setProperty('--tertiary', `${config.colors.tertiary}`)
    doc.style.setProperty('--quaternary', `${config.colors.quaternary}`)
    doc.style.setProperty('--black', `${config.colors.black}`)
    doc.style.setProperty('--white', `${config.colors.white}`)
    doc.style.setProperty('--grey', `${config.colors.grey}`)
    doc.style.setProperty('--shade', `${config.colors.shade}`)
    doc.style.setProperty('--warn', `${config.colors.warn}`)
    doc.style.setProperty('--error', `${config.colors.error}`)
    doc.style.setProperty('--success', `${config.colors.success}`)
    doc.style.setProperty('--head', `${config.typography.head}`)
    doc.style.setProperty('--hWeight', `${config.typography.headWeight}`)
    doc.style.setProperty('--body', `${config.typography.body}`)
    doc.style.setProperty('--bWeight', `${config.typography.bodyWeight}`)
    doc.style.setProperty('--size', `${config.typography.size}`)
    doc.style.setProperty('--line-height', `${config.typography.lineHheight}`)
    doc.style.setProperty('--btnpadding', `${config.buttons.padding}`)
    doc.style.setProperty('--btnborder', `${config.buttons.border}`)
    doc.style.setProperty('--shadow', `${config.other.shadow}`)
    doc.style.setProperty('--radius', `${config.other.radius}`)
}
