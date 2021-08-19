import moment from 'moment'

export const filters = {
  time(date) {
    return date ? moment(date).locale('ru').format('HH:mm') : ''
  },

  dateTime(date) {
    return date ? moment(date).locale('ru').format('DD MMMM, HH:mm') : ''
  },

  date(date) {
    return date ? moment(date).locale('ru').format('DD.MM.YYYY') : ''
  },

  shortDate(date) {
    return date ? moment(date).locale('ru').format('DD MMM') : ''
  },

  money(x = 0, currency = true) {
    return `${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}${currency ? ' uzs' : ''}`;
  },

  phone(rawPhone) {
    return (rawPhone || '').toString()
            .replace(/[^0-9]/g, '')
            .replace(/(\d{2})(\d{3})(\d{2})(\d{2})/g, "+998 ($1) $2-$3-$4")
          || 'Not set'
  },
}

const FiltersInstaller = {
  install(Vue) {
    for (let key in filters) {
      Vue.filter(key, filters[key])
    }
  }
}

export {FiltersInstaller}
